export function validate(config, values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  config.map(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
}

function validateEmails(emails) {
  const ri = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const invalidEmails = emails.split(',').map(e => e.trim()).filter(e => !ri.test(e));

  if (invalidEmails.length > 0) {
    return `These emails are invalid ${invalidEmails}`;
  }

  return null;
}
