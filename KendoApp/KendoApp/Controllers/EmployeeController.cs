using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace KendoApp.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetEmployees()
        {
            var employees = new List<Employee>
            {
                new() { City = "Quito", Country = "Ecuador", EmployeeId = "00001", FullName = "Fernando Murillo", PhoneNumber = 1234567890, Salary = 2852, SIN = 123456789 },
                new() { City = "Barranquilla", Country = "Colombia", EmployeeId = "00002", FullName = "Jane Doe", PhoneNumber = 1234567890, Salary = 2350, SIN = 234567891 },
                new() { City = "Montreal", Country = "Canada", EmployeeId = "00003", FullName = "Luis Escobar", PhoneNumber = 1234567890, Salary = 1420, SIN = 345678912 },
                new() { City = "Mississauga", Country = "Canada", EmployeeId = "00004", FullName = "Michelle Delgado", PhoneNumber = 1234567890, Salary = 5623, SIN = 456789123 },
                new() { City = "Calgary", Country = "Canada", EmployeeId = "00005", FullName = "Bryan Uyana", PhoneNumber = 1234567890, Salary = 7412, SIN = 567891234 },
                new() { City = "Mississauga", Country = "Canada", EmployeeId = "00006", FullName = "Teodoro Galvez", PhoneNumber = 1234567890, Salary = 1236, SIN = 678912345 },
                new() { City = "Winnipeg", Country = "Canada", EmployeeId = "00007", FullName = "Raul Rojas", PhoneNumber = 1234567890, Salary = 5236, SIN = 789123456 },
                new() { City = "Mississauga", Country = "Canada", EmployeeId = "00008", FullName = "Smith Lopez", PhoneNumber = 1234567890, Salary = 1452, SIN = 891234567 },
                new() { City = "Quebec", Country = "Canada", EmployeeId = "00009", FullName = "Homero Romero", PhoneNumber = 1234567890, Salary = 7852, SIN = 9123456789 },
                new() { City = "Lima", Country = "Peru", EmployeeId = "00010", FullName = "Rogelio Gomez", PhoneNumber = 1234567890, Salary = 1452, SIN = 963258741 }
             };

            return Json(employees);
        }
    }

    public class Employee
    {
        public string? FullName { get; set; }
        public string? EmployeeId { get; set; }
        public decimal? SIN { get; set; }
        public decimal? PhoneNumber { get; set; }
        public string? City { get; set; }
        public decimal? Salary { get; set; }
        public string? Country { get; set; }
    }
}
