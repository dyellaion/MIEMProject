using System;

namespace BackendAPI.Models
{
    public class ScriptRunning
    {
        public int ID { get; set; }
        public int ScriptID { get; set; }
        public string ScriptName { get; set; }
        public DateTime DateTime { get; set; }
    }
}