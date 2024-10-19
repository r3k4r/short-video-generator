export const ResultCode = {
  InvalidCredentials: 'INVALID_CREDENTIALS',
  InvalidSubmission: 'INVALID_SUBMISSION',
  UserAlreadyExists: 'USER_ALREADY_EXISTS',
  UserAlreadyExistSettings: 'USER_ALREADY_EXISTS_SETTINGS',
  UserDoesNotExist: 'USER_DOES_NOT_EXIST',
  UnknownError: 'UNKNOWN_ERROR',
  UserCreated: 'USER_CREATED',
  UserLoggedIn: 'USER_LOGGED_IN',
  InvalidPassword: 'INVALID_PASSWORD',
  Verification : 'CONFIRMATION_EMAIL_SENT',
  PasswordReseted : 'PASSWORD_RESETED',
  WrongCurrent : "WRONG_CURRENT",
  MissingFields : "MISSING_FIELDS",
  InfromationUpdated: "INFROMATION_UPDATED",
  TokenExisting : "TOKEN_EXISTING",
  ExpiredToken: "EXPIRED_TOKEN",
  EmailVerified: "EMAIL_VERIFIED",
  ResetPassword: "RESET_PSSSWORD",
  InvalidCode : "INVALID_CODE",
  ExpiredCode : "EXPIRED_CODE",
  TwoFactorSend  : "TWO_FACTOR_SEND",
  PasswordsDontMatch : "PASSWORD_MATCH"
};

export const getMessageFromCode = (resultCode) => {
    switch (resultCode) {
      case ResultCode.InvalidCredentials:
        return 'Invalid credentials!'
      case ResultCode.InvalidSubmission:
        return 'Invalid submission, please try again!'
      case ResultCode.UserAlreadyExists:
        return 'User already exists, please log in!'
      case ResultCode.UserAlreadyExistSettings:
        return 'Email already exists!'
      case ResultCode.UserAlreadyExists:
        return 'User already exists, please log in!'
      case ResultCode.UserDoesNotExist:
        return 'Email does not exist...!'
      case ResultCode.UserCreated:
        return 'User created, welcome!'
      case ResultCode.UnknownError:
        return 'Something went wrong, please try again!'
      case ResultCode.InvalidPassword:
        return 'Use atleast one uppercase and one symbol!'
      case ResultCode.Verification:
        return 'Confirmation Email Sent...!'
      case ResultCode.TokenExisting:
        return 'Email already veried'
      case ResultCode.ExpiredToken:
        return 'Token is Expired...!'
      case ResultCode.EmailVerified:
        return 'Your Email is Verified'
      case ResultCode.ResetPassword:
        return 'Reset Email Sent!'
      case ResultCode.PasswordReseted:
        return 'Password Updated!'
      case ResultCode.PasswordsDontMatch:
        return 'Password Dont Match!'
      case ResultCode.MissingFields:
        return 'Missing required fields!'
      case ResultCode.InfromationUpdated:
        return 'Informations Updated!'
      case ResultCode.WrongCurrent:
        return 'Current Password is Wrong!'
      case ResultCode.InvalidCode:
        return 'Invalid Code!'
      case ResultCode.ExpiredCode:
        return 'Code has expired!'
      case ResultCode.TwoFactorSend:
        return 'Confirmation Code Sent...!'
      case ResultCode.UserLoggedIn:
        return 'Logged in!'
    }
  }