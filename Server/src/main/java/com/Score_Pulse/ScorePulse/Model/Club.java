package com.Score_Pulse.ScorePulse.Model;

import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collation = "club")

public class Club {
    @Id
    private Long id;//010101-PremierL-League1-Arsenal
    private String name;
    private League league;
    private String logoUrl;
    private String Stadium;
    private String country;
    private String manager;



}
