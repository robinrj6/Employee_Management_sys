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
	Employee updateDept(@Param("id") Integer id, @Param("deptid")int deptid);
}
