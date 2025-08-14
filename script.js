const select = document.getElementById("fipe-select");
const modelsContainer = document.getElementById("models-container");
let fipeBrands = [];

const getFipeBrands = async () => {
  try {
    const response = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    fipeBrands = await response.json();
  } catch (error) {
    console.error("Erro ao buscar marcas:", error);
  }
};

const populateSelectWithFipeBrands = () => {
  fipeBrands.forEach((marca) => {
    const option = document.createElement("option");
    option.value = marca.codigo;
    option.textContent = marca.nome;
    select.appendChild(option);
  });
};

const getModelsForSelectedBrand = async () => {
  try {
    if (select.value == "Selecione a Marca") return;

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${select.value}/modelos`);
    const models = (await response.json()).modelos;

    return models;
  } catch (error) {
    console.error("Erro ao buscar modelos:", error);
  }
};

const removeModels = () => {
  while (modelsContainer.firstChild) {
    modelsContainer.removeChild(modelsContainer.firstChild);
  }
};

const showModelsForSelectedBrand = async () => {
  try {
    const models = await getModelsForSelectedBrand();
    if (!models) {
      const message = document.createElement("p");
      message.textContent = "Erro na API.";
      modelsContainer.appendChild(message);
      return;
    }

    if (!models[0].nome) {
      const message = document.createElement("p");
      message.textContent = "Nenhum modelo encontrado!";
      modelsContainer.appendChild(message);
      return;
    }

    models.forEach((model) => {
      const title = document.createElement("h2");
      title.textContent = model.nome;
      modelsContainer.appendChild(title);
    });
  } catch (error) {
    console.error("Erro ao buscar models:", error);
  }
};

select.addEventListener("change", () => {
  removeModels();
  showModelsForSelectedBrand();
});

const main = async () => {
  await getFipeBrands();
  populateSelectWithFipeBrands();
};

main();
