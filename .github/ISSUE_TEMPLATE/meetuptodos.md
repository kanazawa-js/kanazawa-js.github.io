---
name: meetupTODOs
about: meetupの準備テンプレート
title: ''
labels: ''
assignees: ''

---

## 日程

- YYYY/MM/DD  14:00 ~ 17:00

## 会場

- オンライン
  - Slack の #meetup でチャット
  - Gather（~10人） 等で交流する

## 開催までのTODO

うえから順番にやる

### 3週間前

- [ ] Connpassイベントページの作成
  - 前回のイベントをコピーして生成する
- [ ] Connpassで1週間前と1日前のメッセージを投稿予約する
  - connpassのメッセージは[お知らせ文言テンプレ](https://github.com/kanazawa-js/community-page/wiki/%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%E6%96%87%E8%A8%80%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC)を参考に
- [ ] コミュニティページのデプロイ
  1. conppassのイベントページを公開後に、[connpassData.json](https://github.com/kanazawa-js/kanazawa-js.github.io/blob/master/connpassData.json)を更新する
  2. コミュニティページのイベント欄に今回のイベントが表示されているかどうかを確認する
  3. （Github Actionが実行されない場合は） github Actionの`Deploy`を実行する
- [ ] Slackの#generalで次回イベントの通知をする
  - [お知らせ文言テンプレ](https://github.com/kanazawa-js/community-page/wiki/%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%E6%96%87%E8%A8%80%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC)を参考に
- [ ] [Buffer](https://publish.buffer.com/profile/5f44c0bf8c68015ea35d9413/tab/queue)でTwitterPostをスケジューリング（3週間前・2週間前・1週間前・前日・当日）
  - 告知内容は[お知らせ文言テンプレ](https://github.com/kanazawa-js/community-page/wiki/%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%E6%96%87%E8%A8%80%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC)を参考に
  - なお、[setupEventPost2Buffer](https://github.com/kanazawa-js/setupEventPost2Buffer)を実行すれば楽できます


## 当日

- [ ] イベントのファシリテート対応
  - [こちらを確認しながら進行する！](https://github.com/kanazawa-js/community-page/wiki/%E3%83%95%E3%82%A1%E3%82%B7%E3%83%AA%E3%83%86%E3%83%BC%E3%83%88%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC)
