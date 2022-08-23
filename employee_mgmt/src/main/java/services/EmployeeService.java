package services;

import java.util.Collection;

public interface EmployeeService<T, K> {
	Collection<T> getAll();
	T getById(K key);
	T add(T key);
	T deleteById(K key);
	T updateDept(K key,K deptid);
}
