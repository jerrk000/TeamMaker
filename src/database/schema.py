from .. import ma

class PlayerSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'played_matches', 'won_matches', 'lost_matches')