package entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name= "employee")
@JsonIgnoreProperties("hibernateLazyInitializer")
public class Employee{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "empid")
	private int empid;
	@Column(name = "empname")
	private String empname;
	@Column(name = "deptid")
	private int deptid;
	@Column(name = "email")
	private String email;
	
	public Employee(int deptid, String email,String empname, int empid) {
		this.empid = empid;
		this.empname = empname;
		this.deptid = deptid;
		this.email = email;
	}
	
	public Employee() {
		super();
	}
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getEmpname() {
		return empname;
	}
	public void setEmpname(String empname) {
		this.empname = empname;
	}
	public int getDeptid() {
		return deptid;
	}
	public void setDeptid(int deptid) {
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
