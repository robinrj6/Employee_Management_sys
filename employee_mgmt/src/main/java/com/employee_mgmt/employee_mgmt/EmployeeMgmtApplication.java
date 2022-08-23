package com.employee_mgmt.employee_mgmt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"controllers,services"})
@EnableJpaRepositories(basePackages = "repository")
@EntityScan(basePackages = "entities")
public class EmployeeMgmtApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeMgmtApplication.class, args);
	}

}
