package com.Score_Pulse.ScorePulse.Controller;

import com.Score_Pulse.ScorePulse.Services.FootballApiServiceTest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LiveMatchController {

    private final FootballApiServiceTest footballApiServiceTest;

    @GetMapping("/live")
    public String getLive()
    {
        return footballApiServiceTest.getLiveMatches();
    }




}
