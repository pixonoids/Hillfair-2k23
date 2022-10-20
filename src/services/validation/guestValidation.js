import * as yup from 'yup';

const guestValidation = yup.object().shape({
    designation: yup.string().required('Required'),
    social: yup.string().required('Required'),
    address: yup.string().required('Required'),

});

export default guestValidation;