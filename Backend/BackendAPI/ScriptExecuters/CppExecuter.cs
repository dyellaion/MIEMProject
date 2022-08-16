using System;
using System.Diagnostics;
using System.IO;

namespace BackendAPI
{
    public class CppExecuter : IScriptExecuter
    {
        public string path { get; private set; }
        public CppExecuter(string path)
        {
            if (!File.Exists(path))
            {
                throw new FileNotFoundException();
            }
            this.path = path;
        }
        public void Execute()
        {
            using (Process script = new Process())
            {
                script.StartInfo.FileName = path;
                script.StartInfo.UseShellExecute = false;
                script.StartInfo.RedirectStandardOutput = true;
                script.Start();

                Console.WriteLine(script.StandardOutput.ReadToEnd());
            }
        }
    }
}