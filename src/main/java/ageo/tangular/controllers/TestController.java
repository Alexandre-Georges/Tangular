package ageo.tangular.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/test")
public class TestController {
	
	private static final String LOCALHOST_ORIGIN = "http://localhost";
	
	@RequestMapping(
			method = { RequestMethod.GET, RequestMethod.OPTIONS },
			value = "/message",
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> test(HttpServletRequest httpServletRequest) {
		
		Map<String, String> returnValues = new HashMap<String, String>();
		returnValues.put("message", "J2EE mock");
		
		HttpHeaders headers = new HttpHeaders();

		String origin = httpServletRequest.getHeader("Origin");
		
		// Referer is not sent by Firefox
		//String referer = httpServletRequest.getHeader("Referer");
		
		if (origin != null && origin.startsWith(LOCALHOST_ORIGIN)/* && referer!= null && referer.startsWith(LOCALHOST_ORIGIN)*/) {
			headers.add("Access-Control-Allow-Origin", origin);
			headers.add("Access-Control-Allow-Headers", "x-requested-with");
		}

		return new ResponseEntity<Map<String, String>>(returnValues, headers, HttpStatus.OK);
	}

}
