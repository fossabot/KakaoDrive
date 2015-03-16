package hello;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HelloController {
    
    private static final Logger LOG = Logger.getLogger(HelloController.class);
    
    @RequestMapping("/hello")
    public ModelAndView index(@RequestParam("name") String name) {
        ModelAndView mav = new ModelAndView("greeting");
        mav.addObject("name", name);
        
        return mav;
    }
    
}
