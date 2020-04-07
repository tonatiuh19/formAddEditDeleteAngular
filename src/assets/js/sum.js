var sum = 0.0;
$('.payment-value-item').each(function()
{
    sum += parseFloat($(this).text());
});
alert(sum);