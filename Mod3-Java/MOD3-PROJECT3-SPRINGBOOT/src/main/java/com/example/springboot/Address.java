package com.example.springboot;

//import org.springframework.boot.SpringApplication;

import org.springframework.stereotype.Component;

@Component
public class Address {
	
		
		private String street,city, state;
		private int zipcode;

		
		public String getStreet() {
			return street;
		}
		
		public void setStreet(String street) {
			this.street = street;
		}
		
		public String getCity() {
			return city;
		}
		
		public void setCity(String city) {
			this.city = city;
		}
		
		public String getState() {
			return state;
		}
		
		public void setState(String state) {
			this.state = state;
		}
		
		public int getZip() {
			return zipcode;
		}
		
		public void setZip(int zipcode) {
			this.zipcode = zipcode;
		}

		
		public void address() {
			System.out.println("Address:");
			System.out.println( getStreet() + "\n" + getCity() + " " + getState() + " " + getZip());
		}
}

