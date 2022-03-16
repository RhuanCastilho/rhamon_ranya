const fetchApiList = async () => {
  const url = "https://convite-casamento-rr.herokuapp.com/convites";
  const data = await fetch(url).then((data) => data.json());
  return data;
};

const generateNewConfirmed = async () => {
  const data = await fetchApiList();

  for (let index = 0; index < data.invitedList.length; index++) {
    const thNova = document.createElement("hr");
    const conteudoNovo = document.createTextNode(data.invitedList[index].name);
    thNova.appendChild(conteudoNovo);

    const tbody = document.getElementById("tbody");
    document.body.insertBefore(thNova, tbody);
  }
};

generateNewConfirmed();
