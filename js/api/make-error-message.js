const errorBlock = (error) => {
  const section = document.createElement('section');
  const errorContainer = document.createElement('div');
  const errorMessageStatus = document.createElement('h2');
  const errorText = document.createElement('p');
  const button = document.createElement('button');

  section.classList.add('error');
  errorContainer.classList.add('error__inner');
  errorMessageStatus.classList.add('error__title');
  errorText.classList.add('error__text');
  button.classList.add('error__button');

  errorMessageStatus.textContent = `${error}`;
  errorText.textContent = 'Ошибка загрузки данных с сервера';
  button.setAttribute('type', 'button');
  button.textContent = 'Обновить страницу';
  errorContainer.append(errorMessageStatus, errorText, button);
  section.append(errorContainer);
  section.querySelector('error__button');
  document.body.append(section);

  const onButtonClick = () => {
    section.remove();
    location.reload();
  };

  addEventListener('click', onButtonClick);
};

export {errorBlock};
