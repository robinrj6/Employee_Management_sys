package repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	@Transactional
	@Modifying
	@Query("update Employee emp set emp.deptid=:deptid where emp.empid=:id")
	void updateDept(@Param("id") Integer id, @Param("deptid")int newDeptid);
	
//	@Transactional
//	@Modifying
//	@Query(value="insert into Employee(empid,deptid,empname,email) VALUES (emp.empid=:empid,emp.deptid=:deptid,emp.empname=:empname,emp.email=:email)", nativeQuery = true)
//	void addnew(@Param("emp") Employee emp);
//	
}
