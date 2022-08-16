using System;
using System.Diagnostics;
using System.IO;

namespace BackendAPI
{
    public class ShellExecutor : IScriptExecuter
    {
        public string path { get; private set; }
        public ShellExecutor(string path)
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
                script.StartInfo.FileName = "bash";
                script.StartInfo.Arguments = path;
                script.StartInfo.UseShellExecute = false;
                script.StartInfo.RedirectStandardOutput = true;
                script.Start();

                Console.WriteLine(script.StandardOutput.ReadToEnd());
            }
        }
    }
}