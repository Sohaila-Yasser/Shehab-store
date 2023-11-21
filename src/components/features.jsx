import React from "react";
import "./features.css";
export const Features = () => {
  return (
    <div>
      <h1 className="feature-title">Our features</h1>
      <div className="features">
        <div className="one-feature">
          <img
            className="feature-images"
            src="data:image/png;base64,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"
          />
          <h4>Special Offers</h4>
        </div>
        <div className="two-feature">
          <img
            className="feature-images"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEX////5ukgzMzP/v0n5uED8vEj/wUn6w2QnLDIwMTP5uUT7vEgfKDL6wmEpLTL///3+9+v6xGgZJTK1i0ATIjEcJjIiKTIoLDIqKiogICAuMDNXSjYcHBzgqUWgfD0pKSnUoEN7YjlfUDeWdTxEREQUFBT5tjd0XjmthT/LmkLuskf29va1tbXY2NhJQTU7ODRnVTeRkZHm5uZOTk6CZzq+kUHmrUYAHDGAgIA9PT3IyMienp76yXf958dSRzaAZjqNbztubm66urpmZmZNTU371puWlpZEPjQAGDFaWlp5eXn82qb70Y63p46kCQDFAAAQvUlEQVR4nN2da2PauBKG1yhW7djrtgYcMNeEUC65QLJA06RLSdttNj3n/P+/cyxLtuULtmTjC5lPu6QBP3mlGc1oJP744+js/vHp7vn18kvty+Xr8931zVXZD3RQu3/6URu3B61WDVtr0O62fz48lv1cB7Kr69dx22GjTB502w83ZT9ddrt/aEfhERt0L6/LfsJsdvUwHuzFw0p2v3wv+ykz2FM3gc+27uWxjtWbL20/iuVgbBu0ZL+O44eynzWV/RrTHBbc5Y+7p+vv379fPz381fI7n/aX45Px6pUSsNUdPDz6AuDVzfWPcdv7E8jjY/M497UWJd/vSIWuri/H3r8a3xX9jJnsxhuDg/av/cuXm9eu53B+F/iAWe3GfW7LicQvzx49d9R+Lujxstu9C9hmCAR3Y/dfH4uKV24QZIsCN+6cbR9J1Lh0HrjLuFrx/O5xeNTfjoRt9hj37CIeQVy8dqZV+57jt34TRLmW24Mdyq4cNbp8ajwT5QeVn4rPZBKOedPb19ZxjNNHMka7T7y/eeVE0J95PNfh7BIvNVs/+H/1xvnjVDpf/E5ifTtNnemOTOEvB3+sAxqRsJsurHGG0TLssZtpKpERIP912Kc6pP1opfOjjv3Vqrg7vR9n1IB44urGxGvsKtrp59FPPI/bB3yogxoJ2q3070D+Rt2KVsPJgm2QoRxxNc78FnnaYzvNgtRv2FdVdV1zhxfPgyzv4Uzlau5M4WnYylRtIe440zjIz7CfaXOvuaPepNxc//3Xf/7+EH6ZeImMfhAPhMGvTG+S0d7/eXLy6dOnjxbme/p1UkLs8qT2YXvAQ73MmG8BCshOLczTj5SaeEEid7M5iSfbXckpsq9DmQMouJifCOZj7RJZxkILcablLb79gB6m8PU/UXOT3763y80RowBtUxDmyQEwCWFpJbd3ewAPp2a5hO8TAD01ldSY16WO0n1DdI+aqTCfSvQ0TApmHrR4cZumVpfZ9joZBkwOF4STi1YZ6RO3giE1/8vyMZc4P8m2uE1jaRWkKZX3yZ9zhZd+7eKTfG4FFUUJvvSJYaCSLHqcbXHLb5xORgQQCHMBAuCj/PR38ic9DMoJh1yAIhiOLhamJr9MpnOa8eSf5E/CgNmyaH7jUlAB605DMmUrP5A1o7naQPdHp18TP4pkYEUnwDxOBmw6ulnzTGv2oSvjSeJH/W6VMA25FAQzleZD1lwqIvlpoqshnrT1WggZMa4wAdYNuRY0aSsQFRNdDanWFTtIeRQUh40QH0K8IHMxydVcZdl9TGlcCirCwlVQM1RDcwdqH9j/IMnVkFBRaMWbK0zAkeECjtbr+sRlVOd4KiqxH+ZscxfoZ/gCvThvegNzCq2wPz8nr5ytsIjxruYLHgFF7q3xrWRA35XQUq1nqSbCEUFsYmcT62qc5UzGYh2H8eaD4Jbyo+ZCQAMTnuOBqtbtYRrnapxeqow1cx7jzCbEuc+RahdoweaMXA0P09OPez/NaUmVL4vi487oxRkZkURJY4IWM3Bii2huccA4TQIsbg+fPx8U62QavriIQBTA1MDUOOjvczUuIH8vVVrjz+gJS23Rc0arYa3XxLWK5+U8ztU8OoCFrdfSZPSOhhKcOojaogcJoYydabSreXIaNluF5YVpajLiDLM0N3DnBEbTqI/seSgv9q9qqJMZXC2pGYy/bIhMIaPTmAJ4rjrPTJY15tJZmoY+7anrHlwobOc3ZVVNlGUslyKCb97yBg9dsjINuZrv1NmoogDTKWgZWGG9pG/QWsz4swx94xD6XM31pXegpNUqajnK7GREa+VpGQAiXlaLQx0/q3quAFjX6UzR7A9FCERF8VzN1ePDgDr4NLgsaLHGqqBFt1nvJsuL5aS/3kC74AQ7JL+XFtM53LzQiJK+mExnvTlAq5r7m+u7126XPrw2LuowCWOYUOCmf6urkmaapiap+u1UsBhFNxLKRlNa+GdiTbZSxqZqmLV2u9ttD3wnZweDwlpK2RQEwk41aIVkwxxZK20wohxMuJyxz1rj56LSCTYFFbhuSsGnlA1tBhU4MaIQYk3u/iyuPYhJQUVc6VH6yI2d5XPO9eDrphSnZmv8s7gtCjYnI4oX+3RqWktt2G/4y4nqtv+ia9GQrfb4ucj2LlZAb4TKlps5M72ntxImAfQuPCDTkPoKEIe7RdPQ/OStQbf947rIBj1mBV1ATa8tV6PdpKZ7RbUdFEQ4XJkN1TCMZqNj+1grtIBefdUxGk30stTujse1H78eC+4/ZHIyouICmuoKBXEAoDg8bzr6NGaoPAPE3qw+rc/m3uaTtZID4ma2rk+n/3u8uS++uZJbQaOzgU6xXoS9LZmbsoy3Da3E0HI7wR1E0TLwiWEHKgdAXgWt4SjSP4HnBNEYgYR3ianV5GhsYULoOIDSCAZ+Bif4Z7ImhPZ+g2/DsNl9YGNci4q9puMjpVlQKQXc4rlopYcJ78Oy2X1g+8gW6C1ENwzoIUSLH3ugLYz8fYqQYbP7oMboZIQpinUOohxGJHXDmj4XI9/BNZbN7oMak4KWF/3cj0d00kN1nUBYsKt5zwoo1fQkRJLi9xMnYqGEbEMUh4mGhejNRbkZQIRL29dok0q5GjYno5AwEa8iqdO4ZbX9hAW6GsaE102JAir6EcHI/juYF0mEBboaJgVRjN46a2usohSJCHaMGhbmatjLhqLQ0WgVN5GIzPNQYGnhO4QxKogRfSpGD1QRl2akxJVpQa6Gc49e6JxRKka5G+Z4WJSr4VAwHtEJGs6Gtr5JJCzC1bAF+j2IkUHDWZfKt0mOphhXk2JvIqBiMPSDLWtuIbC08GU1bgUx4na/inBFUmBpnpAfIsvd1aTdPtuv4tCpdifn+DZhzq6GbakGQLjOElTRjYua5PxHuL07wvJ1Naz54Ko/mwPoxwyquAnWs/VZoiO1CZO7hTMYa7pkGE31ZYIw3R3CkEelsn4cC3fJjhQB5ulLGRUkVTVr9DUbiwmlpuiVo/xx0Z6EiUvS/AEZ56BAle5tTMPGRNu4MYjSRWjmRgK+y5GPMdCL68+1gLlqbiC8cCrc/qBhAbJMwpOPea67GbfPBFCPbGdGmKqF6b5ABw1mwBz5GJ2MMAQCjEbEmJr3P56Kx6Og5UUbNmJoqzPSHBWPSEFwIcmqjRiai5GGVWx2FCbAdzkqyLO7JOtBFSUteFAkoKJQuoIcdVE01wz/XDSno44R2salVGRbyeQaJji3z4iKbn/MyxwqvfruQtIjMD9P2QBzVZANkNrCDqhoLuZodxMIFuZW8qspdZI21DBgrgryNyEEVUSIAt7bhQLalG86alqA5YcJ3h1ejKhGIQoEEwjD+mqr6YbKCpgjXxoFbcTmPkQHE1qYu/IV5J6DEpW600HDrIV2BhEm0xzMNdCzKQhcQH3Uc7ryAqE/oCK75RvoeRXUR5DemEhSkQmwUnNQR1k68FQMBw1+wCoFeqQgeiWkYgbEagX6plNnoRAzqlitQK97hSQLsXYIFasV6JseoALO3Tx3f+hnAcyRL4uCCqDbmYOh/4UZsQKBnqqqSfsAw6GfVcUKBHoBjLwEyb3dQaHOLfncjRP61SXL5kQVAj1CdGHOJmQBZinovKZFhv6zLdvmRPlz0Mbx9DIwInWkQP3mbS95QYM1XSo/0EcjKp6q6jmkNwkJotQpv6rGdwKUQkInd+GEAlTCof9zFRTk3AD1qQgpBe1BG1RxzQhYeqDH3fN434xSUVtotIKC4FuGo9Bfgc0XxpZmOF/3V6tRHbXcUyrKfgUxojtQG0PGsmH5YQL2JuhwnSYZjc4MKAr85o+AroI+xLNt+VU1xt0lsPPOuZiNc2vo+YO8OvEVJ8hA1bZsc/DP0hUUhQufYhJaaNIqarSCGNFS8WzLFibKn4Oi0glU1bQXa/RRc3EBgiiWigZjmKiCgkFA+/g17W60ZaiCBoYXFdhdYswHPUDTPVmnD30e1Qgjhk8xRQL+mR8f/xA9k5YTkyxB7cbeeEQWq0Cgp4ZocyVACPqEqYHiABU0jCWTZkHAHPm4FdRHtr+EffyCajczZVOxCnNQ6ATKhtbaDY9Tg5wDyaBiBQK9KHbCNRnSHeN2Z6dWsVphQvfOD8It7oZxz/KkVLFiCnqACrmhSxq5y5hUKuarIO8JUJUChEuyQFWXG4eRVpGRsBJVtYl7tdGSAjz3rjpU+2TVQuWLjR1jVS1HPtaMnjrao/YJIoViK7aY4fPLbtCQLtjSpfJL9wFEHSNSZUNssr7EdwER9Cq0cvHUZChE1McUVJAM1ZGIQ78FLzG2clVDwQhE0Sv8UjV8MlQt/EYFyoa85yb8iMN/nXm5WhvUdR76cg5R3ZSxy6L8ZjzBvrMKN6P7EWfkKNY3CIQVdemK1uijf12BLgvGlmYAhvV+v96zKC3EW8rdrFG0V88BmnfDbdPrSTde2E4VVCJMgM1O0w3JMHR5NAcBFdc6UtDWSoR10xuqxi0bYPkKKmDUdKudklGHgaCx/vfc29gWVs516lXoumfs+FWWvuv9Gt+AFQBuaXdDobhDtRI921/TNOPhSeefi/5fAGioSoxFp3xPEX44OU0GDDXjWbLVgeBX0f871lD9zAqY83nlZERaQdnxk7IxV2gVQ4jWUC2/nZINUQRuuqQ1FjUn3tnlijhE1p7tAk6cfziNQ6T7ZCZzCDdLcgnQi31qNw6RBbCYSwPiVPR3G9oXcOELAWoN+6y1uN/dsADmGiZoxL0qhpvx3MPW6gwEELlVLEhBG3GPin4FyYsQE2k7fI9aehULU9BGjFQxQkGP0MoBG7d9IT5oxALmHSYCiBEqRpcNnVGKY4a5hilVLHCI7kNUvNJ9k6qqOZ6GMDZW1gJuzq9iwQpGIgL3+k1ttbcZz97JplX8XC//aA8rojh0Mz1tSIqBUbfD6lMKkfloT/EX5v0RdjeBLu1IBW0V56KDWIWqWiziSRDRoA+F0AqaTdN07uK0d2PsBRxrNlFkmAgg7lcRIXpVNWPZg7C3xLyyhgS2UmK94graiEEVh5SKcOq2vp7bCzj3AsAeLk+dl9+Mx4AYUpFG3DlVNVw/Uzbkawyw/1QYq2qlOBkKMaQi5W7wN06obk0G1gKbhiyA5fJFIbrXjcqqrSLVjAcXvISlKxiN6FPxs9fK5XxxkcEW5auhILJ4FadeVQ1+I56GrZmytEAfttjQ76073e8KM5gByyZzLSZoqEO3FWFEjoZIK7ZpmOsePa8lhH4M6BwiaSbfHYcVrBBgbNDAiK6C7vcuJipYNlPAYkK/fQbNVVCqwNGedBYf+l0FpU4FNl9SWkzQMN1v02I+2lM5BZGFBqqrYk1zAaueLsVbGJHa3+VRsEphwm8flH1Bw5mDR60gsrCK1LcXHb+CyEIqenORWcFKA8a4G9aaTNUCfdjCKtoD9a0oiCxSRdayYZWdjGfhBVzTqMC9aoe0sIqVr4vyWhCR8UagaocJvwXdDYsdkYLI4tsZjl5BZLwqHo2T8YxPxSMI9GHjUfEIFUTGruKRORnPWBGPVEFkbIhHqyAyFsSjCxN+S3Y3R60gsiQVj1xBZPEqHrGT8SxOxaMM9GHbr+KbUBDZPhWP3sl4Fo34ZhREFoX4hhREFm7WfANhwm9BFd+Ygsj8iG9qDjpGB42K9Mkc2jwV3+AQxeYgVqKVKx/DHvWNDlFsSMU36WQ8+3D6ZuegYx++VlvB/wN0/baNwOBVwAAAAABJRU5ErkJggg=="
          />
          <h4>Best Brands</h4>
        </div>
        <div className="three-feature">
          <img
            className="feature-images"
            src="https://cdn-icons-png.flaticon.com/512/4047/4047296.png"
          />
          <h4>Free Shiping</h4>
        </div>
        <div className="four-feature">
          <img
            className="feature-images"
            src="https://www.shutterstock.com/image-illustration/black-premium-quality-seal-label-260nw-1106133656.jpg"
          />
          <h4>High Quality</h4>
        </div>
        <div className="five-feature">
          <img
            className="feature-images"
            src="data:image/png;base64,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"
          />
          <h4>Purchase facilities</h4>
        </div>
      </div>
    </div>
  );
};
