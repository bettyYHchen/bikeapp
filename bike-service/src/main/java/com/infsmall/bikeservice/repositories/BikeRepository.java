package com.infsmall.bikeservice.repositories;

import com.infsmall.bikeservice.models.Bike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
