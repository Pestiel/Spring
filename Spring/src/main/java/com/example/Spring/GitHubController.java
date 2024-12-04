package com.example.Spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@RestController
@RequestMapping("/api/github")
public class GitHubController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/user/{username}")
    public Map<String, Object> getUser(@PathVariable String username) 
    {
        String url = "https://api.github.com/users/" + username;
        return restTemplate.getForObject(url, Map.class);
    }

    @GetMapping("/repos/{username}")
    public Object getUserRepos(@PathVariable String username) 
    {
        String url = "https://api.github.com/users/" + username + "/repos";
        return restTemplate.getForObject(url, Object.class);
    }
}