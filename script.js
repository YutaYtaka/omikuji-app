document.addEventListener('DOMContentLoaded', function() {
    const rollButton = document.getElementById('roll-button');
    const resultText = document.getElementById('result-text');

    // 疑似AI用のコメント集
    // 各運勢に複数のコメントを用意する
    const fortunes = {
        "大吉": [
            "大吉！今日は重量の記録更新できるかも！！",
            "大吉！君の筋肉が爆発する予感！最高のトレーニングデーだ！",
            "大吉！努力が報われる一日だ！新たな限界に挑もう！",
            "大吉！今日は筋肉の神が微笑んでいるぞ！"
        ],
        "中吉": [
            "中吉！今日はコツコツと基礎を固める日。地道な努力が実を結ぶ！",
            "中吉！集中力してトレーニングに臨めば、良い結果が出せるはずだ！",
            "中吉！バランス良く全身を鍛えよう！きっと発見があるぞ！"
        ],
        "小吉": [
            "小吉！コツコツ積み重ねれば大きな力に！今日のトレーニングを楽しもう！",
            "小吉！休憩もトレーニングの一部！しっかり休んで明日に備えよう。",
            "小吉！悪くないぞ！いつもと違う種目をするのもアリだ！"
        ],
        "吉": [
            "吉！まずまずの運勢！いつも通りのメニューでも、丁寧にやれば効果絶大だ！",
            "吉！水分補給と栄養摂取を忘れずに！基本が大事だぞ。",
            "吉！トレーニング仲間と励まし合って、楽しく体を動かそう！"
        ],
        "末吉": [
            "末吉！今日はいつもより入念にストレッチ！怪我なく続けられることが一番だ。",
            "末吉！新しいトレーニング動画を見て、モチベーションを上げていこう！",
            "末吉！過去の自分と比べてみて、成長を実感する日だ！"
        ],
        "凶": [
            "凶！今日は無理は禁物！軽めの運動で身体を労わろう。",
            "凶！でも大丈夫！リカバリーを最優先！明日のためにしっかり休む日だ。",
            "凶！逆境こそ成長のチャンス！心と体を休ませて、次への活力を蓄えよう。"
        ],
        "大凶": [
            "大凶！しかし、これは筋肉の神からの試練！明日からの爆発的成長に備えよ！",
            "大凶！今日は筋トレオフデー推奨！しっかり栄養補給して、明日の復活を誓おう！",
            "大凶！全ての困難は君を強くする！明日の自分に期待しろ！"
        ]
    };

    const outcomes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"]; // 運勢の種類

    let shuffleInterval; // シャッフル用のインターバルIDを保存

    rollButton.addEventListener('click', function() {
        // ボタンを無効化して、連打を防ぐ
        rollButton.disabled = true;
        resultText.textContent = ""; // 結果テキストを一度クリア

        let shuffleCount = 0;
        const totalShuffles = 20; // シャッフルする回数（演出の長さ）
        const shuffleSpeed = 80; // シャッフルの速度（ms）

        // シャッフル演出を開始
        shuffleInterval = setInterval(() => {
            const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
            // シャッフル中は運勢名のみを表示
            resultText.textContent = randomOutcome + "…？"; 

            shuffleCount++;
            if (shuffleCount >= totalShuffles) {
                clearInterval(shuffleInterval); // シャッフルを停止

                // 最終結果を決定
                const finalOutcomeIndex = Math.floor(Math.random() * outcomes.length);
                const finalOutcome = outcomes[finalOutcomeIndex];
                const finalFortune = fortunes[finalOutcome][Math.floor(Math.random() * fortunes[finalOutcome].length)];

                // 最終結果を表示
                resultText.textContent = finalFortune;

                // ボタンを有効化
                rollButton.disabled = false;
            }
        }, shuffleSpeed);
    });
});
