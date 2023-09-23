import { Text, View, Image, StyleSheet } from 'react-native'

/**
 * selectable 长按复制 false - 不支持 true(default) - 支持
 * numberOfLines 文本省略
 * 
 */

const App = () => {

  let a = '我是 teacher \n 刘' // 模板化

  const press2 = () => alert('我是刘老师')

  const pressAgain = () => alert('又点了一下')

  return (<View>
    <View style={styles.header}>
    </View>
    <View>
      <Text selectable={false} style={styles.colorSty}>你好， react native
        {/* 内层样式继承外层样式 父子嵌套 */}
        <Text>is mine</Text>
      </Text>
      {/* \n等需要模板化, 作为字符串形式 */}
      <Text style={[styles.colorSty, styles.secondLine]}>这是react native {'\n'} 第二行</Text>
      <Text numberOfLines={1} style={[styles.colorSty]}>第三行用来测试文本省略第三行用来测试文本省略第三行用来测试文本省略</Text>
      {/* 函数用法, 同react */}
      <Text onPress={() => { alert('你好'); press2() }}>{a}</Text>
      <Text onPress={pressAgain} style={styles.secondLine}>再点一下</Text>
    </View>
    <View style={centerStyle.all}>
      <Text style={centerStyle.text}>Image</Text>
      <View style={centerStyle.allImg}>
        <Image
          onLoadStart={() => {console.log('onload start');
          setTimeout(() => {
            console.log('start 5 s')
          }, 5000)
        }}
          onLoadEnd={() => {console.log('onload end')}}
          onLoad={() => {console.log('onload')}}
          style={centerStyle.imgOne} source={'https://img0.baidu.com/it/u=461762235,3073465188&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'} />
        <Image style={centerStyle.imgOne} source={require('./assets/demo1.webp')}></Image>
        {/* base64适合小图片 */}
        <Image style={centerStyle.imgOne} source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACk3L/eH5io5nCRliVHIHzHA5IHWoC6JtMjINxC/MByWJweRxux3HH51nKooyabg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' }} />
      </View>
    </View>
  </View>)
}


const styles = StyleSheet.create({
  header: {
    height: 45,
    width: '100vw',
    borderColor: '#fff',
  },
  colorSty: {
    color: "#666",
    width: '100vw',
    backgroundColor: '#ccc',
    textAlign: 'center',
    fontSize: 20
  },
  secondLine: {
    fontSize: 15,
    color: 'salmon',
    textAlign: 'right',
  }
})

const centerStyle = StyleSheet.create({
  all: {
    width: '100vw',
    height: '50vh',
    backgroundColor: '#f99',
    borderWidth: 6,
    borderColor: 'yellow',
  },
  text: {
    width: '100vw',
    textAlign: 'center',
    lineHeight: 30,
  },
  allImg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgOne: {
    width: 100,
    height: 100
  }
})

export default App;