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
    [Route("/[controller]")]
    [ApiController]
    public class ScriptsRunningController : ControllerBase
    {
        private readonly BackendContext _context;

        public ScriptsRunningController(BackendContext context)
        {
            _context = context;
        }

        // GET: api/ScriptsRunning
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ScriptRunning>>> GetScriptsRunning()
        {
            return await _context.ScriptsRunning.ToListAsync();
        }
    }
}
