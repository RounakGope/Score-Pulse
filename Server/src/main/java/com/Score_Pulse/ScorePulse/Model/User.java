package com.Score_Pulse.ScorePulse.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collation = "users")
@AllArgsConstructor

public class User {
    @Id
   private String id;

   private String name;
   private String age;
  private   String password;
   private Club favClub;
   private Country country;
   private List<Club> followingClub;


}
