using Microsoft.EntityFrameworkCore.Migrations;

namespace BikeCheck.Migrations
{
    public partial class AddPhotoURLToBicycles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                            name: "PhotoURL",
                            table: "Bicycles",
                            type: "text",
                            nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                            name: "PhotoURL",
                            table: "Bicycles");
        }
    }
}
