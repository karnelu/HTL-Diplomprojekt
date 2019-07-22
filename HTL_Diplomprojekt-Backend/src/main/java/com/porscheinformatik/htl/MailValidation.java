package com.porscheinformatik.htl;
import org.apache.commons.validator.routines.EmailValidator;

public class MailValidation {
    public static boolean isValid(String email){
        if(EmailValidator.getInstance().isValid(email))return true;
        else return false;
    }
}
