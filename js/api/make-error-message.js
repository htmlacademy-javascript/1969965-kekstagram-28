const makeErrorBlock = () => {
  const sectionElement = document.createElement('section');
  const errorContainerElement = document.createElement('div');
  const errorMessageStatusElement = document.createElement('h2');
  const buttonElement = document.createElement('button');

  sectionElement.classList.add('error');
  errorContainerElement.classList.add('error__inner');
  errorMessageStatusElement.classList.add('error__title');
  buttonElement.classList.add('error__button');

  errorMessageStatusElement.textContent = 'Ошибка загрузки данных с сервера';
  buttonElement.setAttribute('type', 'button');
  buttonElement.textContent = 'Обновить страницу';
  errorContainerElement.append(errorMessageStatusElement, buttonElement);
  sectionElement.append(errorContainerElement);
  sectionElement.querySelector('error__button');
  document.body.append(sectionElement);

  const onButtonClick = () => {
    sectionElement.remove();
    location.reload();
  };

  addEventListener('click', onButtonClick);
};

export { makeErrorBlock };
