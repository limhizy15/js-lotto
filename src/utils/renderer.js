import { $ } from "./selector.js";

export const updateLottoAmounts = (selector, amounts) => {
  const template = `
  <label class="flex-auto my-0 lotto-amounts" data-cy="lotto-amounts"
  >총 ${amounts}개를 구매하였습니다.</label
  >
  <div class="flex-auto d-flex justify-end pr-1">
    <label class="switch">
      <input type="checkbox" class="lotto-numbers-toggle-btn" data-cy="lotto-numbers-toggle-btn" />
      <span class="text-base font-normal">번호보기</span>
    </label>
  </div>
`;

  $(selector).innerHTML = template;
};

export const updateLottoTickets = (amounts, lottoTicketsList) => {
  const newLottoTickets = [...new Array(amounts)].map(
    (_, idx) => `
      <div class="d-flex items-center">
        <span class="mx-1 text-4xl lotto-tickets-img">🎟️ </span>
        <span class="lotto-tickets-numbers d-none">
          ${lottoTicketsList[idx].join(", ")}
        </span>
      </div>`
  );

  $(".lotto__tickets").innerHTML = newLottoTickets.join("");
};

export const updateManualLottoTickets = (amounts, lottoTicketsList) => {
  const template = (idx) =>
    `
    <div class="d-flex items-center">
        <span class="mx-1 text-4xl lotto-tickets-img">🎟️ </span>
        <span class="lotto-tickets-numbers d-none">
          ${lottoTicketsList[idx].join(", ")}
        </span>
      </div>
    `;

  $(".manual-lotto__tickets").innerHTML = Array.from(Array(amounts)).map(
    (index) => template(index)
  );
};

export const resetLotto = () => {
  $(".lotto__menu").innerHTML = "";
  $(".lotto__tickets").innerHTML = "";
  $(".winning-number-form").innerHTML = "";
  $(".manual-number-form").innerHTML = "";
  $(".purchase__price-input").value = "";
  $(".manual-purchase__price-input").value = "";
};

export const resetManualLotto = () => {
  $(".lotto__menu").innerHTML = "";
  $(".lotto__tickets").innerHTML = "";
  $(".winning-number-form").innerHTML = "";
};

export const addManualNumberInput = (selector, amounts) => {
  const template = (idx) => `
    <div>
      <div class="manual-${idx + 1} manual-numbers">
        <span>${idx + 1}번째</span>
        <input
          type="number"
          class="manual-number mx-1 text-center"
          data-cy="manual-number-1"
        />
        <input
          type="number"
          class="manual-number mx-1 text-center"
          data-cy="manual-number-2"
        />
        <input
          type="number"
          class="manual-number mx-1 text-center"
          data-cy="manual-number-3"
        />
        <input
          type="number"
          class="manual-number mx-1 text-center"
          data-cy="manual-number-4"
        />
        <input
          type="number"
          class="manual-number mx-1 text-center"
          data-cy="manual-number-5"
        />
        <input
          type="number"
          class="manual-number mx-1 text-center"
          data-cy="manual-number-6"
        />
      </div>
    </div>`;

  let newManualNumberInputs = [];

  for (let i = 0; i < amounts; i++) {
    newManualNumberInputs.push(template(i));
  }

  $(selector).innerHTML = `
    <label class="flex-auto d-inline-block mb-3">로또 번호를 입력해주세요.</label>
    <div class="d-flex flex-col">
    ${newManualNumberInputs.join("")}
    </div>
    <button
      type="button"
      class="manual-purchase-btn mt-5 btn btn-green w-100"
      data-cy="manual-purchase-btn"
    >
      로또 발급
    </button>
  `;
};

export const addWinningNumberInput = (selector) => {
  const template = `
  <label class="flex-auto d-inline-block mb-3"
  >지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label
    >
    <div class="d-flex">
      <div>
        <h4 class="mt-0 mb-3 text-center">당첨 번호</h4>
        <div>
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number-1"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number-2"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number-3"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number-4"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number-5"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number-6"
          />
        </div>
      </div>
      <div class="bonus-number-container flex-grow">
        <h4 class="mt-0 mb-3 text-center">보너스 번호</h4>
        <div class="d-flex justify-center">
          <input type="number" class="bonus-number text-center" data-cy="bonus-number"/>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="open-result-modal-button mt-5 btn btn-cyan w-100"
      data-cy="result-modal-btn"
    >
      결과 확인하기
    </button>
  `;
  $(selector).innerHTML = template;
};

export const updateResult = (lottoResultCount, lottoResult) => {
  $(".rank-5").innerText = `${lottoResultCount["rank-5"]}개`;
  $(".rank-4").innerText = `${lottoResultCount["rank-4"]}개`;
  $(".rank-3").innerText = `${lottoResultCount["rank-3"]}개`;
  $(".rank-2").innerText = `${lottoResultCount["rank-2"]}개`;
  $(".rank-1").innerText = `${lottoResultCount["rank-1"]}개`;
  $(
    ".winning-rate"
  ).innerText = `당신의 총 수익률은 ${lottoResult.rate}%입니다.`;
};
