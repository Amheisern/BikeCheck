using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace BikeCheck.Migrations
{
    public partial class CreateBicycle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bicycles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Frame = table.Column<string>(type: "text", nullable: true),
                    Fork = table.Column<string>(type: "text", nullable: true),
                    Saddle = table.Column<string>(type: "text", nullable: true),
                    Handlebar = table.Column<string>(type: "text", nullable: true),
                    BottomBracket = table.Column<string>(type: "text", nullable: true),
                    ChainRing = table.Column<string>(type: "text", nullable: true),
                    RearCog = table.Column<string>(type: "text", nullable: true),
                    Crank = table.Column<string>(type: "text", nullable: true),
                    WheelSet = table.Column<string>(type: "text", nullable: true),
                    Pedals = table.Column<string>(type: "text", nullable: true),
                    Other = table.Column<string>(type: "text", nullable: true),
                    PhotoURL = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bicycles", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bicycles");
        }
    }
}
