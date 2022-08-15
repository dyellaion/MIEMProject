using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendAPI.Migrations
{
    public partial class SeedingDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Scripts",
                columns: new[] { "ID", "lang", "path", "scriptName" },
                values: new object[,]
                {
                    { 1, "python", "test.py", "test.py" },
                    { 2, "ruby", "test.rb", "test.rb" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Scripts",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Scripts",
                keyColumn: "ID",
                keyValue: 2);
        }
    }
}
