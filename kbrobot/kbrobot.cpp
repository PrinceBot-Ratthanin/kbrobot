#ifndef __KBROBOT_CPP__
#define __KBROBOT_CPP__

#include "kbrobot.h"


KBRobot::KBRobot(void) { }

void KBRobot::init(void) {
	
	ledc_timer_config_t timer_PWMA;
	timer_PWMA.duty_resolution = LEDC_TIMER_8_BIT;
	timer_PWMA.freq_hz = 5000; 
	timer_PWMA.speed_mode = LEDC_HIGH_SPEED_MODE;
	timer_PWMA.timer_num = LEDC_TIMER_3;
	ledc_timer_config(&timer_PWMA);


	ledc_channel_config_t ledc_conf_A;
	ledc_conf_A.channel = LEDC_CHANNEL_4;
	ledc_conf_A.duty = 0;
	ledc_conf_A.gpio_num   = GPIO_NUM_19;
	ledc_conf_A.intr_type  = LEDC_INTR_DISABLE;
	ledc_conf_A.speed_mode = LEDC_HIGH_SPEED_MODE;
	ledc_conf_A.timer_sel  = LEDC_TIMER_3;
	ledc_channel_config(&ledc_conf_A);

	ledc_channel_config_t ledc_conf_B;
	ledc_conf_B.channel = LEDC_CHANNEL_5;
	ledc_conf_B.duty = 0;
	ledc_conf_B.gpio_num   = GPIO_NUM_23;
	ledc_conf_B.intr_type  = LEDC_INTR_DISABLE;
	ledc_conf_B.speed_mode = LEDC_HIGH_SPEED_MODE;
	ledc_conf_B.timer_sel  = LEDC_TIMER_3;
	ledc_channel_config(&ledc_conf_B);
	
	ledc_channel_config_t ledc_conf_C;
	ledc_conf_C.channel = LEDC_CHANNEL_6;
	ledc_conf_C.duty = 0;
	ledc_conf_C.gpio_num   = GPIO_NUM_26;
	ledc_conf_C.intr_type  = LEDC_INTR_DISABLE;
	ledc_conf_C.speed_mode = LEDC_HIGH_SPEED_MODE;
	ledc_conf_C.timer_sel  = LEDC_TIMER_3;
	ledc_channel_config(&ledc_conf_C);

	ledc_channel_config_t ledc_conf_D;
	ledc_conf_D.channel = LEDC_CHANNEL_7;
	ledc_conf_D.duty = 0;
	ledc_conf_D.gpio_num   = GPIO_NUM_27;
	ledc_conf_D.intr_type  = LEDC_INTR_DISABLE;
	ledc_conf_D.speed_mode = LEDC_HIGH_SPEED_MODE;
	ledc_conf_D.timer_sel  = LEDC_TIMER_3;
	ledc_channel_config(&ledc_conf_D);


	// Config Timer1 to use Servo
	ledc_timer_config_t timer_conf2;
	timer_conf2.duty_resolution = LEDC_TIMER_16_BIT;
	timer_conf2.freq_hz = 50; // 50Hz
	timer_conf2.speed_mode = LEDC_HIGH_SPEED_MODE;
	timer_conf2.timer_num = LEDC_TIMER_1;
	ledc_timer_config(&timer_conf2);

	ledc_channel_config_t ledc_conf_servo;
	ledc_conf_servo.channel = LEDC_CHANNEL_3;
	ledc_conf_servo.duty = 0;
	ledc_conf_servo.gpio_num   = GPIO_NUM_18;
	ledc_conf_servo.intr_type  = LEDC_INTR_DISABLE;
	ledc_conf_servo.speed_mode = LEDC_HIGH_SPEED_MODE;
	ledc_conf_servo.timer_sel  = LEDC_TIMER_1;
	ledc_channel_config(&ledc_conf_servo);

	// clear error flag
	error = false;
	// set initialized flag
	initialized = true;
}

int KBRobot::prop_count(void) {
	// not supported
	return 0;
}

bool KBRobot::prop_name(int index, char *name) {
	// not supported
	return false;
}

bool KBRobot::prop_unit(int index, char *unit) {
	// not supported
	return false;
}

bool KBRobot::prop_attr(int index, char *attr) {
	// not supported
	return false;
}

bool KBRobot::prop_read(int index, char *value) {
	// not supported
	return false;
}

bool KBRobot::prop_write(int index, char *value) {
	// not supported
	return false;
}

void KBRobot::process(Driver *drv) { }


void KBRobot::ledcWrite(int pin,int duty){
	switch (pin)
	{
	case 4:
		ledc_set_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_4, duty);
		ledc_update_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_4);
		break;
	case 5:
		ledc_set_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_5, duty);
		ledc_update_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_5);
		break;
	case 6:
		ledc_set_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_6, duty);
		ledc_update_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_6);
		break;
	case 7:
		ledc_set_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_7, duty);
		ledc_update_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_7);
		break;
	
	default:
		break;
	}
}

int KBRobot::digitalRead(int pin) {
	gpio_set_direction(static_cast<gpio_num_t>(pin), GPIO_MODE_INPUT);

	return gpio_get_level(static_cast<gpio_num_t>(pin));
}

void KBRobot::servoSetAngle(int pin, int angle) {
	int duty = angle * (8191 - 1638) / 180.0 + 1638;

	ledc_set_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_3, duty);
	ledc_update_duty(LEDC_HIGH_SPEED_MODE,LEDC_CHANNEL_3);
}


void KBRobot::motorspeed(int pin,int _direction,int _speed){
	int _SpeedsA;
	int _SpeedsB;
	if (pin == 1) {
		_SpeedsA = abs(_speed);
		_SpeedsA = _SpeedsA * 2.55;
		if (_SpeedsA > 255){_SpeedsA = 255;}
		else if (_SpeedsA < -255){_SpeedsA = -255;}
		if (_direction == 1) {
		ledcWrite(6, 255 - abs(_SpeedsA));
		ledcWrite(7, 255);
		}
		else if (_direction ==2 ) {
		ledcWrite(6, 255);
		ledcWrite(7, 255 - abs(_SpeedsA));
		}
	}
	if (pin == 2) {
		_SpeedsB = abs(_speed);
		
		_SpeedsB = _SpeedsB * 2.55;
		if (_SpeedsB > 255){_SpeedsB = 255;}
		else if (_SpeedsB < -255){_SpeedsB = -255;}
		if (_direction == 1) {
		ledcWrite(4, 0);
		ledcWrite(5, abs(_SpeedsB));
		}
		else if (_direction == 2) {
		ledcWrite(4, abs(_SpeedsB));
		ledcWrite(5, 0);
		}
	}
}

#endif
