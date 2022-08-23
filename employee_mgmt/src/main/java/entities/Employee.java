package entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name= "employee")
@JsonIgnoreProperties("hibernateLazyInitializer")
public class Employee{
	@Id
	@Column(name = "empid")
	private int empid;
	@Column(name = "empname")
	private String empname;
	@Column(name = "deptid")
	private int deptid;
	@Column(name = "email")
	private String email;
	
	public Employee(int empid, String empname, int deptid, String email) {
		super();
		this.empid = empid;
		this.empname = empname;
		this.deptid = deptid;
		this.email = email;
	}
	public Employee() {
	}
	public Integer getEmpid() {
		return empid;
	}
	public void setEmpid(Integer empid) {
		this.empid = empid;
	}
	public String getEmpname() {
		return empname;
	}
	public void setEmpname(String empname) {
		this.empname = empname;
	}
	public Integer getDeptid() {
		return deptid;
	}
	public void setDeptid(Integer deptid) {
		this.deptid = deptid;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "Employee [empid=" + empid + ", empname=" + empname + ", deptid=" + deptid + ", email=" + email + "]";
	}

	
}
