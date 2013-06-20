package ageo.tangular.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/regular")
public class RegularController {
	
	@RequestMapping(
			method = { RequestMethod.GET },
			value = "/message",
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> test(HttpServletRequest httpServletRequest) {
		
		Map<String, String> returnValues = new HashMap<String, String>();
		returnValues.put("message", "It's working !");

		return new ResponseEntity<Map<String, String>>(returnValues, HttpStatus.OK);
	}

}
