package services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entities.Employee;
import repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService<Employee, Integer> {

	public EmployeeServiceImpl() {
		super();
	}
	
	@Autowired
	public EmployeeRepository empRepo;
	@Override
	public Collection<Employee> getAll() {
		Collection<Employee> allEmp=empRepo.findAll() ;
		return allEmp;
	}

	@Override
	public Employee getById(Integer key) {
		Employee emp=empRepo.getReferenceById(key);
		System.out.println(emp);
		return emp;
	}

	@Override
	public Employee add(Employee emp) {
		System.out.println(emp);
		empRepo.save(emp);
		return emp;
	}

	@Override
	public Employee deleteById(Integer key) {
		Employee emp=empRepo.getReferenceById(key);
		if(emp != null) {
			empRepo.deleteById(key);
			return emp;
		}
		else {
			return null;
		}
	}

	@Override
	public Employee updateDept(Integer key, Integer deptid) {
		empRepo.updateDept(key, deptid);
		return empRepo.getReferenceById(key);
	}

}
