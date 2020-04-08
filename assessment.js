'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
/**
 * 指定した要素の子どもを全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) { // 子どもの要素があるかぎり削除
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) { // 名前が空の時は処理を終了する
        return;
    }

    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    // TODO ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' +
        encodeURIComponent('おすすめ音mad原曲'); +
    "&ref_src=%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E9%9F%B3mad%E5%8E%9F%E6%9B%B2";
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', '診断結果の文章');
    anchor.innerText = 'Tweet #おすすめ音mad原曲';
    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
    a
};

const answers = [
    '{userName}のおすすめ原曲は Bad apple!! feat. nomico',
    '{userName}のおすすめ原曲は Evans(BEMANI)',
    '{userName}のおすすめ原曲は Ievan Polkka',
    '{userName}のおすすめ原曲は FLOWER',
    '{userName}のおすすめ原曲は on and on',
    '{userName}のおすすめ原曲は RED ZONE',
    '{userName}のおすすめ原曲は Second Heaven',
    '{userName}のおすすめ原曲は シドのテストコース',
    '{userName}のおすすめ原曲は 最終鬼畜妹フランドール・S',
    '{userName}のおすすめ原曲は YO-KAI Disco',
    '{userName}のおすすめ原曲は ナイト・オブ・ナイツ',
    '{userName}のおすすめ原曲は ココロオドル',
    '{userName}のおすすめ原曲は スカイハイ',
    '{userName}のおすすめ原曲は LAB=1',
    '{userName}のおすすめ原曲は 論理空軍',
    '{userName}のおすすめ原曲は Big Brother(核M-POOL)',
    '{userName}のおすすめ原曲は Big Blue',
    '{userName}のおすすめ原曲は bass 2 bass',
    '{userName}のおすすめ原曲は JOMANDA',
    '{userName}のおすすめ原曲は smooooch・∀・',
    '{userName}のおすすめ原曲は 柴又(2号.)',
    '{userName}のおすすめ原曲は イワシがつちからはえてくるんだ',
    '{userName}のおすすめ原曲は ヤツメ穴',
    '{userName}のおすすめ原曲は Rook My Emotions',
    '{userName}のおすすめ原曲は いーあるふぁんくらぶ',
    '{userName}のおすすめ原曲は 最終鬼畜妹フランドール・S',
    '{userName}のおすすめ原曲は Avast your ass',
    '{userName}のおすすめ原曲は Show Time under Leaden Skies',
    '{userName}のおすすめ原曲は Fly to the Leaden Sky',
    '{userName}のおすすめ原曲は 魔理沙は大変なものを盗んでいきました',
    '{userName}のおすすめ原曲は sm21783669',
    '{userName}のおすすめ原曲は ダンスロボットダンス',
    '{userName}のおすすめ原曲は ぽっぴっぽー',
    '{userName}のおすすめ原曲は Intensive Care Unit',
    '{userName}のおすすめ原曲は Spider Dance',
    '{userName}のおすすめ原曲は Crazy hill',
    '{userName}のおすすめ原曲は Disco Necropolis',
    '{userName}のおすすめ原曲は amber',
    '{userName}のおすすめ原曲は The snippet',
    '{userName}のおすすめ原曲は 亀上的竜宮生活',
    '{userName}のおすすめ原曲は Dans la rue',
    '{userName}のおすすめ原曲は Rollerdisco Rumble',
    '{userName}のおすすめ原曲は Luna Ascension',
    '{userName}のおすすめ原曲は Indignant Divinity',
    '{userName}のおすすめ原曲は ワリオの森',
    '{userName}のおすすめ原曲は Save the World!',
    '{userName}のおすすめ原曲は MY FIRST YTPMV',
    '{userName}のおすすめ原曲は Metal Beat',
    '{userName}のおすすめ原曲は B.B.K.K.B.K.K',
    '{userName}のおすすめ原曲は Zerd_01',
    '{userName}のおすすめ原曲は 新宝島',
    '{userName}のおすすめ原曲は グルメレース',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);
    return result;
}
