package controllers;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import entities.Employee;
import services.EmployeeService;

@RestController
public class EmployeeRestController{
	@Autowired
	public EmployeeService<Employee, Integer> empService;
//	@Autowired
//	public EmployeeRepository empRepo;
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/getAll")
	public Collection<Employee> getAllEmp(){
		Collection<Employee> allEmp=empService.getAll();
		return allEmp;
	}
	
	@GetMapping("/getById/{key}")
	public Employee getEmpById(@PathVariable Integer key) {
		return empService.getById(key);
	}
	
	@PostMapping("/add")
	public Employee addNew(@RequestBody Employee emp) {
		return empService.add(emp);
	}
	
	@DeleteMapping("/deleteById/{id}")
	public Employee deleteById(@PathVariable Integer id) {
		return empService.deleteById(id);
	}
	
	@PutMapping("/updateDept/{id}/{newDeptid}")
	public Employee updateDept(@PathVariable Integer id,@PathVariable Integer newDeptid) {
		return empService.updateDept(id, newDeptid);
	}
	
}