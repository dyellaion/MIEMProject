using System;

namespace BackendAPI
{
    public class ExecManager
    {
        public static IScriptExecuter GetExecuter(string lang, string path)
        {
            IScriptExecuter ret = null;
            switch (lang)
            {
                case "python":
                    ret = new PyExecuter(path);
                    break;
                case "ruby":
                    ret = new RubyExecuter(path);
                    break;
                case "php":
                    ret = new PHPExecuter(path);
                    break;
                case "cpp":
                    ret = new CppExecuter(path);
                    break;
                case "perl":
                    ret = new PerlExecuter(path);
                    break;
                case "shell":
                    ret = new ShellExecutor(path);
                    break;
                case "js":
                    ret = new JSExecuter(path);
                    break;
                default:
                    throw new ArgumentException();
            }

            return ret;
        }
    }
}