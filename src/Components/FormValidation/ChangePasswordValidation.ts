import * as Yup from 'yup';
export const ChangePasswordValidation = Yup.object().shape({
  otp: Yup.array()
    .of(
      Yup.string()
        .required('')
        .matches(/^[0-9]$/),
    )
    .length(6),
  newPassword: Yup.string()
    .min(7, 'Password must be minimum 7 character long.')
    .required('Please enter new password.'),
  confirmNewPassword: Yup.string()
    .min(7, 'Password must be minimum 7 character long.')
    .required('Please enter new password again.')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});
