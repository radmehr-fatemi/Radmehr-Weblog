export const commentValidation = ( name ,email ,text ) => {
    let validation;
    !name.trim() ? validation = false : validation = true
    !text.trim() ? validation = false : validation = true

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    !regex.test( email ) ? validation = false : validation = true

    return validation
}