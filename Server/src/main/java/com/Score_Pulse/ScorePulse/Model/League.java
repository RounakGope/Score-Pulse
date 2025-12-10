package com.Score_Pulse.ScorePulse.Model;

import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collation = "league")
@Data
public class League {
    @Id
    private Long id;
    private String leagueName;
    private String country;
    private String teamCount;
    private List<Club> clubs;


}
