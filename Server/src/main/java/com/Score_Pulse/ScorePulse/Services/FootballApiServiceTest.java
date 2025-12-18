package com.Score_Pulse.ScorePulse.Services;

import com.Score_Pulse.ScorePulse.config.ApiFootballConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class FootballApiServiceTest {

    @Qualifier("apiFootballWebClient")
    private final WebClient footballApiClient;

    public String getLiveMatches() {
        return footballApiClient.get()
                .uri(
                        "https://v3.football.api-sports.io/leagues?season=2022&id=39")
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

}
