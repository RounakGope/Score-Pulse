package com.Score_Pulse.ScorePulse.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class ApiFootballConfig {

    @Value("${api.football.base-url}")
    private String baseUrl;

    @Value("${api.football.api-key}")
    private String apiKey;

    @Bean("apiFootballWebClient")
    public WebClient footballApiClient() {
        return WebClient.builder()
                .baseUrl(baseUrl)
                .defaultHeader("x-apisports-key", apiKey)
                .build();
    }

}

