from PIL import Image


def f(input, output, row_num, strat="avg", l=0.0, t=0.0, r=1.0, b=1.0):
    img = Image.open(input)
    data = img.getdata()

    w, h = img.size
    cropped_img = img.crop((w * l, h * t, w * r, h * b))
    cropped_data = list(cropped_img.getdata())

    colors = []
    for row_idx in range(row_num):
        sliced = cropped_data[
            (row_idx * len(cropped_data) // row_num) : (
                (row_idx + 1) * len(cropped_data) // row_num
            )
        ]

        if strat == "avg":
            sum = [0] * 3
            for item in sliced:
                sum[0] += item[0]
                sum[1] += item[1]
                sum[2] += item[2]
            colors.append(tuple(round(sum[i] / len(sliced)) for i in range(3)))

        elif strat == "med":
            cnt = [0] * 16 * 16 * 16
            for item in sliced:
                idx = [item[i] // 16 for i in range(3)]
                cnt[idx[0] * 16 * 16 + idx[1] * 16 + idx[2]] += 1

            mx = 0
            for i in range(16 * 16 * 16):
                if cnt[i] > cnt[mx]:
                    mx = i

            r = mx // (16 * 16)
            g = mx // 16 % 16
            b = mx % 16
            colors.append(tuple([r * 16 + 8, g * 16 + 8, b * 16 + 8]))

    print(colors)
    new_data = [colors[i * row_num // len(data)] for i in range(len(data))]
    img.putdata(new_data)
    if output != None:
        img.save(output, "JPEG")
    else:
        img.show()


if __name__ == "__main__":
    f("./public/album/1.jpeg", None, 10)
    f("./public/album/2.jpeg", None, 10, l=0.4, r=0.6)
    f("./public/album/seoul.jpeg", None, 10)
    f("./public/album/3.jpeg", None, 10)
    f("./public/album/animal.jpeg", None, 10)
