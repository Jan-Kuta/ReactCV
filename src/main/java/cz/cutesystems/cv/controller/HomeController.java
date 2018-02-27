package cz.cutesystems.cv.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by kutik on 12.02.18.
 */
@Controller
public class HomeController {

    @RequestMapping(value = {"/", "/new", "/cv/**", "/edit/**"})
    public String index(){
        return "index";
    }

    @RequestMapping(value = {"/login"})
    public String login(){
        return "login";
    }
}
