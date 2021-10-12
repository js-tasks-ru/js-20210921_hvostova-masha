export default class ColumnChart {
  element;
  generalChartInfo = {
    chartHeight: 50,
    label: 'Default Chart Title',
    link: '#',
    value: 344
  };

  get chartHeight() {
    return this.generalChartInfo.chartHeight;
  }

  constructor(creationObj) {
    this.generalChartInfo = {...this.generalChartInfo, ...creationObj};

    const columnsTemplate = this.getColumnsTemplate();
    const template = `
            <div class="column-chart ${!this.generalChartInfo?.data ? 'column-chart_loading' : ''}" style="--chart-height: ${this.generalChartInfo.chartHeight}">
              <div class="column-chart__title">
                ${this.generalChartInfo?.label}
                <a class="column-chart__link" href="${this.generalChartInfo?.link}">View all</a>
              </div>
              <div class="column-chart__container">
                <div data-element="header" class="column-chart__header">
                    ${this.generalChartInfo?.formatHeading ? this.generalChartInfo?.formatHeading(this.generalChartInfo?.value) : this.generalChartInfo?.value}
                </div>
                ${columnsTemplate}
              </div>
            </div>
    `;

    const elementNode = document.createElement('div');
    elementNode.innerHTML = template;
    this.element = elementNode.firstElementChild;
  }

  update(newData) {
    this.generalChartInfo.data = newData;
    const newNode = document.createElement('div');
    newNode.innerHTML = this.getColumnsTemplate();
    this.element.querySelector('.column-chart__container').replaceChild(newNode, this.element.querySelector(".column-chart__chart"));
  }

  getColumnsTemplate() {
    const data = this.generalChartInfo?.data;
    let dataTemplate = '<div data-element="body" class="column-chart__chart">';
    if (!data?.length) {
      dataTemplate += `<object data="charts-skeleton.svg"></object>`;
    } else {
      const maxValue = Math.max(...data);
      const scale = 50 / maxValue;

      const chartsHeight = data.map(item => {
        return {
          percent: (item / maxValue * 100).toFixed(0) + '%',
          value: String(Math.floor(item * scale))
        };
      });

      chartsHeight.forEach(chartValue => {
        dataTemplate += `<div style="--value: ${chartValue.value}" data-tooltip="${chartValue.percent}"></div>`;
      });
    }
    return dataTemplate + '</div>';
  }

  destroy() {
    delete this.generalChartInfo;
    delete this.element;
  }

  remove() {
    this.element.remove();
  }
}
