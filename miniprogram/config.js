var data = {
      //云开发环境id
      env: 'cloud1-2gdd2s9o9f6b260f',
      //校区
      campus: [{
                  name: '成都工业学院',
                  id: 0
            },
            {
                  name: '成都理工大学',
                  id: 1
            },
            {
                  name: '宜宾学院',
                  id: 2
            },
            {
                  name: '川外成都学院',
                  id: 3
            },
            {
                  name: '西华大学',
                  id: 4
            },
            {
                  name: '轻化工大学',
                  id: 5
            }

      ],
      //配置导航栏，建议不要添加太多，不然前端不好看
      college: [
            {
                  name: '学习',
                  id: 0
            },
            {
                  name: '数码',
                  id: 1
            },
            {
                  name: '装饰品',
                  id: 2
            },
            {
                  name: '衣物',
                  id: 3
            },
            {
                  name: '运动器材',
                  id: 4
            },
            {
                  name: '化妆品',
                  id: 5
            },
            {
                  name: '交通工具',
                  id: 6
            },
            {
              name: '其他',
              id: 7
            }
      ],
}
//下面的就别动了
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}