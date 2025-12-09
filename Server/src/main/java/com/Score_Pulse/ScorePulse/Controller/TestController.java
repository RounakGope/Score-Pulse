package com.Score_Pulse.ScorePulse.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @PostMapping("/test/{name}")
    public ResponseEntity<?> test(@PathVariable String name)
    {
        return ResponseEntity.ok().body("Server is Up:"+name);


    }
}
