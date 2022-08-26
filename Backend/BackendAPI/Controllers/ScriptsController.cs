using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAPI.Context;
using BackendAPI.Models;

namespace BackendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScriptsController : ControllerBase
    {
        private readonly BackendContext _context;

        public ScriptsController(BackendContext context)
        {
            _context = context;
        }

        // GET: api/Scripts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Script>>> GetScripts()
        {
            return await _context.Scripts.ToListAsync();
        }

        // GET: api/Scripts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Script>> GetScript(int id)
        {
            var script = await _context.Scripts.FindAsync(id);

            if (script == null)
            {
                return NotFound();
            }

            IScriptExecuter executer = ExecManager.GetExecuter(script.lang, script.path);
            try
            {
                executer.Execute();
            }
            catch (Exception e)
            {
                return Problem(null, null,500);
            }

            ScriptRunning scriptRunning = new ScriptRunning();
            scriptRunning.ScriptID = id;
            scriptRunning.DateTime = DateTime.Now;


            if (!(_context.ScriptsRunning.Any(e => e.ScriptID == id)))
            {
                _context.ScriptsRunning.Add(scriptRunning);
                await _context.SaveChangesAsync();
            }
            else
            {
                var found = _context.ScriptsRunning.FirstOrDefault(s => s.ScriptID.Equals((id)));
                scriptRunning.ID = found.ID;
                var local = _context.Set<ScriptRunning>()
                    .Local
                    .FirstOrDefault(s => s.ScriptID == id);
                if (local != null)
                {
                    // detach
                    _context.Entry(local).State = EntityState.Detached;
                }
                // set Modified flag in your entry
                _context.Entry(scriptRunning).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }

            return script;
        }

        // PUT: api/Scripts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutScript(int id, Script script)
        {
            if (id != script.ID)
            {
                return BadRequest();
            }

            _context.Entry(script).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ScriptExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Scripts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Script>> PostScript(Script script)
        {
            _context.Scripts.Add(script);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetScript", new { id = script.ID }, script);
        }

        // DELETE: api/Scripts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteScript(int id)
        {
            var script = await _context.Scripts.FindAsync(id);
            if (script == null)
            {
                return NotFound();
            }

            _context.Scripts.Remove(script);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ScriptExists(int id)
        {
            return _context.Scripts.Any(e => e.ID == id);
        }

        private bool ScriptRunningExist(int id)
        {
            return _context.ScriptsRunning.Any(e => e.ScriptID == id);
        }
    }
}
